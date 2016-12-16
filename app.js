/**
 * Created by mihailharitonov on 16.12.16.
 */
//модуль
var myCourses = angular.module("myCourses", []);

//контролерр
myCourses.controller("coursesCTRL", function ($scope, $http) {
    $http.get('model.json').success(function (data) {
        $scope.model = data;
    });
    //добавляем обработчик события по клику на кнопку
    $scope.addNewCourse = function () {
        //пушим в курсы новые проперти
        $scope.model.courses.push({
            //помните courseName в инпуте?
            name: $scope.courseName,
            passed: "Планирую в будущем"
        });
        //чистим инпут
        $scope.courseName = "";
    };
    $scope.removeCourse = function (item) {

    };
    //формируем src для include  дальнейшей вставки таблицы в страницу
    $scope.tableURl = "table.html";
    $scope.formURL = "addCourse.html"

});
