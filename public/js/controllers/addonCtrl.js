define(['util','xhr','app','config','api','addons','tplManager'],
function(util,xhr,app,config,api,addons,TM) {

    var addonCtrl = {
        initLocalAddons: function(page) {
            TM.renderTarget('addonListTemplate', addons.getAddons(), '#addons-local-nav');
            TM.renderTarget('addonViewsListTemplate', addons.getViews(), '#addon-views-local-nav');

            $$('#addons-local-nav').find('a').click(function() {
                var $link = $$(this);
                var addon = addons.getAddon($link.data('package'), $link.data('version'));
                app.f7view.router.load({
                    url: this.href,
                    context: addon
                });
                return false;
            });
        },

        onViewLoaded: function(addon, view) {
            // console.log('addonCtrl', 'onViewLoaded', view);
        },

        onAddonLoaded: function(addon) {
            // console.log('addonCtrl', 'onAddonLoaded', addon);
        },

        //
        // Addon Details Page
        //

        initAddonDetails: function(page) {
            console.log('addonCtrl', 'initAddonDetails', page);
            var $page = $$(page.container),
              package = page.query.package,
              version = page.query.version;

            // Query addon installed status from the sandbox server
            addonCtrl.initAddonDetailsSandbox(package, version);
            addonCtrl.initAddonDetailsStore(package, version);

            // Sandbox actions
            $page.on('click', 'a[data-command="sandbox-upload"]', function() {
              addonCtrl.uploadSandboxAddon(package, version);
            });

            $page.on('click', 'a[data-command="sandbox-delete"]', function() {
              addonCtrl.deleteSandboxAddon(package, version);
            });

            // Store actions
            $page.on('click', 'a[data-command="store-submit"]', function() {
              addonCtrl.submitStoreAddon(package, version);
            });

            $page.on('click', 'a[data-command="store-delete"]', function() {
              addonCtrl.deleteStoreAddon(package, version);
            });

            // api.getAddon(package, function(addon) {
            //     console.log('addonCtrl: initAddonDetails:', package, addon);
            //     var $page = $$(page.container);
            //     addonCtrl.renderAddonDetails($page, addon);
            //
            //     // Permissions tag select
            //     if (addon.installed && config.isCurrentTeam()) {
            //         api.getInstalledAddonSetting(package, 'permissions', function(response) {
            //             var savedTags = response ? response.value : [];
            //             var $tagSelect = $page.find('#addon-permissions-form .tag-select');
            //             tagSelect.initWidget($tagSelect, savedTags, function(data) {
            //                 api.updateInstalledAddonSetting(package, 'permissions', {
            //                     value: JSON.stringify(data)
            //                 }, function(response) {
            //                     console.log('addonCtrl: updateInstalledAddonSetting', response);
            //                 });
            //             });
            //         });
            //     }
            // });
        },

        initAddonDetailsSandbox: function(package, version, callback) {
          // T.apiSandbox.get('/addons/' + package + '/versions/' + version, {}, function(err, res) {
          //   addonCtrl.renderAddonDetailsSandbox(res);
          //   if (callback)
          //     callback(err, res);
          // });
        },

        initAddonDetailsStore: function(package, version, callback) {
          // T.api.get('/addons/' + package + '/versions/' + version, {}, function(err, res) {
          //   addonCtrl.renderAddonDetailsStore(res);
          //   if (callback)
          //     callback(err, res);
          // });
        },

        renderAddonDetailsSandbox: function(context) {
          TM.renderTarget('addonDetailsSandboxTemplate', context || {}, '#addon-details-sandbox');
        },

        renderAddonDetailsStore: function(context) {
          TM.renderTarget('addonDetailsStoreTemplate', context || {}, '#addon-details-store');
        },

        uploadSandboxAddon: function(package, version, callback) {
          console.log('Installing addon', package, version);
          addonCtrl.renderAddonDetailsSandbox({ uploading: true });
          $$.ajax({
            url: '/addon/sandbox/upload/' + package + '/' + version,
            method: 'POST',
            dataType: 'json',
            success: function(data, status, xhr) {
              addonCtrl.renderAddonDetailsSandbox(data);
              app.f7.addNotification({
                  title: 'Addon Uploaded',
                  message: 'Your addon uploaded successfully',
                  hold: 4000
              });
              if (callback)
                callback(null, data);
            },
            error: function(xhr, status) {
              app.f7.addNotification({
                  title: 'Addon Upload Failed',
                  message: 'Your addon uploaded failed: ' + xhr.responseText,
                  hold: 4000
              });
              if (callback)
                callback(xhr.responseText, null);
            }
          });
        },

        submitStoreAddon: function(package, version, callback) {
          console.log('Submitting addon', package, version);
          addonCtrl.renderAddonDetailsStore({ submitting: true });
          $$.ajax({
            url: '/addon/store/submit/' + package + '/' + version,
            method: 'POST',
            dataType: 'json',
            success: function(data, status, xhr) {
              data.submitted = true;
              addonCtrl.renderAddonDetailsStore(data);
              app.f7.addNotification({
                  title: 'Addon Submitted',
                  message: 'Your addon was submitted successfully and is prending review.',
                  hold: 4000
              });
              if (callback)
                callback(null, data);
            },
            error: function(xhr, status) {
              app.f7.addNotification({
                  title: 'Addon Submittion Failed',
                  message: 'Your addon submission failed: ' + xhr.responseText,
                  hold: 4000
              });
              if (callback)
                callback(xhr.responseText, null);
            }
          });
        },

        deleteSandboxAddon: function(package, version, callback) {
          console.log('Uninstalling addon version', package, version);
          addonCtrl.renderAddonDetailsSandbox({ status: 'Deleting...', deleting: true });
          T.apiSandbox.delete('/addons/' + package + '/versions/' + version, {}, function(err, res) {
            addonCtrl.renderAddonDetailsSandbox();
            if (err) {
              app.f7.addNotification({
                  title: 'Addon Error',
                  message: 'Addon uninstall failed: ' + err,
                  hold: 4000
              });
            }
            else {
              app.f7.addNotification({
                  title: 'Addon Uninstalled',
                  message: 'Addon uninstalled successfully',
                  hold: 4000
              });
            }
            if (callback)
              callback(err, res);
          });
        },

        deleteStoreAddon: function(package, version, callback) {
          console.log('Deleting store addon version', package, version);
          addonCtrl.renderAddonDetailsStore({ status: 'Deleting...', deleting: true });
          T.api.delete('/addons/' + package + '/versions/' + version, {}, function(err, res) {
            addonCtrl.renderAddonDetailsStore();
            if (err) {
              app.f7.addNotification({
                  title: 'Addon Deleted',
                  message: 'Addon delete failed: ' + err,
                  hold: 4000
              });
            }
            else {
              app.f7.addNotification({
                  title: 'Addon Deleted',
                  message: 'Addon deleted successfully',
                  hold: 4000
              });
            }
            if (callback)
              callback(err, res);
          });
        }
    };

    return addonCtrl;
});
