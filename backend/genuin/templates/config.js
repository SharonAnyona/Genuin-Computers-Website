// Configuration file for easy setup
const CONFIG = {
    // Replace this with your ngrok URL when testing
    API_BASE_URL: 'https://73e278b8d0e4.ngrok-free.app',
    
    // API endpoints
    ENDPOINTS: {
        PRODUCTS: '/api/products/',
        CART: '/api/cart/session/',
        ORDERS: '/api/orders/',
        ADD_TO_CART: '/store/add-to-cart/',
        PAYMENT: '/mpesa/initiate-payment/'
    },
    
    // App settings
    SETTINGS: {
        AUTO_REFRESH_INTERVAL: 30000, // 30 seconds
        PAYMENT_CHECK_INTERVAL: 3000,  // 3 seconds
        NOTIFICATION_DURATION: 3000    // 3 seconds
    }
};
