# bullsfirst
BULLSFIRST EXERCISE INSTRUCTIONS


Getting Started
----
To run this application we need to run following command after check-out this repo.

1. npm install
2. bower install
3. gulp serve (run application locally)
4. gulp (Generate dist folder for production)

Identified bad practice as follow
----
1. Implemented **single page application** using routing.
2. I have used **ui-router** for routing as it will support nested view routing for complex view.
3. Created **header-directive** for header as only center part will be changing while clicking on header item.
4. Created **modular** structure of application so in future if application will scale up we can easily manage.
5. **$scope.totals : ** Removed **name** and **legend** properties as it is not required for this object.
6. **updateTotals : ** Added update totals method as when we are adding account we need to update counts of **market value** and **cash**.
7. **addAccount : (Improvment) : ** This is suggestion for add account. we need to create UI for this and we can pass all params instead of static value in addAccount method.
8. **refresh : ** Added on-click event and reload page on click refresh button. but in real time we need to call rest call and get data from back-end and we need to redraw grid/table data.
9. **ng-repeat track by $index : ** I have replaced code ng-repeat with track by $index. it will increase performance of application.If we won't write track by than by default it will be track by object itself.
10. **one way binding :** Added one way binding for table row data for increase performance.
11. **Used ng-style instead of style :** It is not good practice to write style as it won't support in IE9.
12. **Used ng-src instead of src :** It is not good practice to write src as some time we need to load src from scope variable and while loading it will display as broken image.
13. **Trade View : ** On click on trade view it will navigate to trade view. **This is for illustrate single page application and modular coding standards**.
14. **bullsfirst : ** Clicking on logo it will navigate to home page (Account is home page in our application.)
15. **Assets Folder : ** All images or icons or logo will be placed into assets.