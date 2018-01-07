# React Time Tracker

Tracks time spent by user on a page in a web application or in a react mobile app developed using Apache Cordova.

ReactTimeTracker component gives your application complete control to track time. You can pause/resume the tracker at any point by just passing a prop, typical use case is when you have dialogs on a page and want to ignore the time spent on dialogs.
When your component unmounts ReactTimeTracker calls the callback passed as a prop with the actual time spent by user by ignoring the time during which tracker was paused.

It supports **Apache Cordova**, if you have a mobile app just include this component and it will calculate time by managing when your app got paused/resumed without doing any additional configuration.

## Install

### npm

`React Time Tracker` can be bundled with the client using an
npm-compatible packaging system such as [webpack](http://webpack.github.io/) or [Browserify](http://browserify.org/).

```
npm install react-time-tracker --save
```

## Usage

** For es6 import/export modules. **
```javascript
import React from 'react';
import TimeTracker from 'react-time-tracker';
```

```javascript

export default class YourComponent extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return <div>
                {/* Your component code will go here */}
                <TimeTracker onSave={this.onSave} />
             </div>
    }

    onSave(totalTime){
      // e.g. store time in database
    }
}

```

## Props

### `onSave` : `function`
Gets called when TimeTracker component is unmounted from DOM. It receives totalTime as an argument.

```
  <TimeTracker onSave={this.onSave} />
```
```
  onSave(totalTime){
    console.log('Total time spent by user', totalTime);
  }
```

### `pause`: `boolean`
Useful when you want to control the component based on some custom conditions. You can use this property to pause/resume the tracker.

Pass *pause = true* to stop the tracker
```
  <TimeTracker pause={true} onSave={this.onSave} />
```
To resume it again pass *pause = false*
```
  <TimeTracker pause={false} onSave={this.onSave} />
```

## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT).
