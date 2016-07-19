angular.module('QSoft.routers').config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('auth', {
            url: '/auth',
            parent: 'app',
            abstract: true,
            meta: {
                title: 'Auth',
                description: ''
            },
            views: {
                'main@': {
                    templateUrl: '/views/auth/auth.html'
                }
            }
        })
        .state('auth.logout', {
            url: '/logout',
            meta: {
                title: 'Đăng xuất',
                description: ''
            },
            views: {
                'contents@auth': {
                    controller: 'AuthLogoutCtrl',
                    controllerAs: 'AuthLogoutCtrlAs'
                }
            }
        })
        .state('auth.login', {
            url: '/login',
            meta: {
                title: 'Đăng nhập',
                description: ''
            },
            views: {
                'contents@auth': {
                    controller: 'AuthLoginCtrl',
                    controllerAs: 'AuthLoginCtrlAs',
                    templateUrl: '/views/auth/views/login.html'
                }
            }
        })
        .state('auth.register_member', {
            url: '/dang-ky-thanh-vien',
            meta: {
                title: 'Đăng ký thành viên',
                description: ''
            },
            views: {
                'contents@auth': {
                    controller: 'AuthRegisterMemberCtrl',
                    controllerAs: 'AuthRegisterMemberCtrlAs',
                    templateUrl: '/views/auth/views/register_form.html'
                }
            }
        })
        .state('auth.register', {
            url: '/register',
            meta: {
                title: 'Đăng ký thành viên',
                description: ''
            },
            redirectTo: 'auth.register.step_1',
            views: {
                'contents@auth': {
                    controller: 'AuthRegisterCtrl',
                    controllerAs: 'AuthRegisterCtrlAs',
                    templateUrl: '/views/auth/views/register.html'
                }
            }
        })
        .state('auth.register.step_1', {
            url: '/step-1',
            meta: {
                title: 'Đăng ký thành viên - Thông tin cá nhân',
                description: ''
            },
            views: {
                'contents_forms@auth.register': {
                    templateUrl: '/views/auth/views/register_step_1.html'
                }
            }
        })
        .state('auth.register.step_2', {
            url: '/step-2',
            meta: {
                title: 'Đăng ký thành viên - Trở thành người mẫu',
                description: ''
            },
            views: {
                'contents_forms@auth.register': {
                    templateUrl: '/views/auth/views/register_step_2.html'
                }
            }
        })
        .state('auth.register.step_3', {
            url: '/step-3',
            meta: {
                title: 'Đăng ký thành viên - Upload ảnh đại diện',
                description: ''
            },
            views: {
                'contents_forms@auth.register': {
                    templateUrl: '/views/auth/views/register_step_3.html'
                }
            }
        });
}]);