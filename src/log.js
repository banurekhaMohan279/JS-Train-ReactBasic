/*
Questions
1. How Initial page gets displayed?
index.js -> app.js -> index.html
Directly access assets from public folder
<img src="/image.jpg" alt="image" />

However, webpack doesnt minify assets in public folder - hence importing recommended
import image from '../../public/images/logofooter.png'
<img src={image}/>

Tasks
1. Set a new image via import and direct from public folder
App.js

2. Add bootstrap
add css and scipt in index.HTML
make changes to .js files in src folder

3. Add routes
install react-router-dom Module
routes.js, index.js, Component/App.js

4. set entity/action/reducer cycle
add node module react-redux, redux
index.js - add Provider
*/
