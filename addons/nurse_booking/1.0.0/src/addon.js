import IndexPage from './pages/index.vue';
import VipPage from './pages/vip.vue';
import VipDetailsPage from './pages/vip-details.vue';
import ServiceListPage from './pages/service-list.vue';
import ServiceDetailsPage from './pages/service-details.vue';
import OrderLocationPage from './pages/order-select-location.vue';
import OrderDatePage from './pages/order-select-date.vue';
import OrderConfirmPage from './pages/order-confirm.vue';
import OrderDetailsPage from './pages/order-details.vue';
import OrderCanceledPage from './pages/order-canceled.vue';
import OrderErrorPage from './pages/order-error.vue';
import OrderSuccessPage from './pages/order-success.vue';
import HistoryPage from './pages/history.vue';

const routes = [
  {
    path: '/nurse_booking/',
    component: IndexPage,
  },
  {
    path: '/nurse_booking/vip/',
    component: VipPage,
  },
  {
    path: '/nurse_booking/vip-details/',
    component: VipDetailsPage,
  },
  {
    path: '/nurse_booking/service-list/',
    component: ServiceListPage,
  },
  {
    path: '/nurse_booking/service-details/:id/',
    component: ServiceDetailsPage,
  },
  {
    path: '/nurse_booking/order-select-location/',
    component: OrderLocationPage,
  },
  {
    path: '/nurse_booking/order-select-date/',
    component: OrderDatePage,
  },
  {
    path: '/nurse_booking/order-confirm/',
    component: OrderConfirmPage,
  },
  {
    path: '/nurse_booking/order-details/',
    component: OrderDetailsPage,
  },
  {
    path: '/nurse_booking/order-canceled/',
    component: OrderCanceledPage,
  },
  {
    path: '/nurse_booking/order-error/',
    component: OrderErrorPage,
  },
  {
    path: '/nurse_booking/order-success/',
    component: OrderSuccessPage,
  },
  {
    path: '/nurse_booking/history/',
    component: HistoryPage,
  },
];

export default routes;