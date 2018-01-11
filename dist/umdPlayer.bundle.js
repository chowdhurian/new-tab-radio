/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactJPlayer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactJplayer = __webpack_require__(1);

var _reactJplayer2 = _interopRequireDefault(_reactJplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  id: 'AudioPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'BBC Radio 4',
    sources: {
      mp3: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p'
    }
  }
};

(0, _reactJplayer.initializeOptions)(defaultOptions);

var AudioPlayer = function AudioPlayer() {
  return _react2.default.createElement(
    _reactJplayer2.default,
    { id: defaultOptions.id, className: 'jp-sleek' },
    _react2.default.createElement(_reactJplayer.Audio, null),
    _react2.default.createElement(
      _reactJplayer.Gui,
      null,
      _react2.default.createElement(
        'div',
        { className: 'jp-controls jp-icon-controls' },
        _react2.default.createElement(
          _reactJplayer.Play,
          null,
          _react2.default.createElement('i', { className: 'fa' })
        ),
        _react2.default.createElement(
          _reactJplayer.Repeat,
          null,
          _react2.default.createElement('i', { className: 'fa fa-repeat' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'jp-progress' },
          _react2.default.createElement(
            _reactJplayer.SeekBar,
            null,
            _react2.default.createElement(_reactJplayer.BufferBar, null),
            _react2.default.createElement(_reactJplayer.PlayBar, null),
            _react2.default.createElement(_reactJplayer.CurrentTime, null),
            _react2.default.createElement(_reactJplayer.Duration, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'jp-volume-container' },
          _react2.default.createElement(
            _reactJplayer.Mute,
            null,
            _react2.default.createElement('i', { className: 'fa' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-volume-slider' },
            _react2.default.createElement(
              'div',
              { className: 'jp-volume-bar-container' },
              _react2.default.createElement(_reactJplayer.VolumeBar, null)
            )
          )
        ),
        _react2.default.createElement(
          _reactJplayer.FullScreen,
          null,
          _react2.default.createElement('i', { className: 'fa fa-expand' })
        ),
        _react2.default.createElement(
          _reactJplayer.Download,
          null,
          _react2.default.createElement('i', { className: 'fa fa-download' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'jp-title-container' },
          _react2.default.createElement(_reactJplayer.Poster, null),
          _react2.default.createElement(_reactJplayer.Title, null)
        )
      ),
      _react2.default.createElement(_reactJplayer.BrowserUnsupported, null)
    )
  );
};

exports.default = AudioPlayer;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _reactJplayer = __webpack_require__(1);

var _audioPlayer = __webpack_require__(2);

var _audioPlayer2 = _interopRequireDefault(_audioPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Pass the jPlayer reducer and it's initialStates to the store */
var store = (0, _redux.createStore)((0, _redux.combineReducers)({ jPlayers: _reactJplayer.reducer }));

/* Wrap our player in the Redux Provider and render the jPlayer.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlayers state
*/
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_audioPlayer2.default, null)
), document.getElementById('app'));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWJkN2QwNTI1Yjk3NzFlNWQwZTQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdEpQbGF5ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW9QbGF5ZXIuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RSZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qc3giXSwibmFtZXMiOlsiZGVmYXVsdE9wdGlvbnMiLCJpZCIsImtleUVuYWJsZWQiLCJ2ZXJ0aWNhbFZvbHVtZSIsIm1lZGlhIiwidGl0bGUiLCJzb3VyY2VzIiwibXAzIiwiQXVkaW9QbGF5ZXIiLCJzdG9yZSIsImpQbGF5ZXJzIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLHVCOzs7Ozs7QUNBQSw4Qjs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7OztBQU1BLElBQU1BLGlCQUFpQjtBQUNyQkMsTUFBSSxhQURpQjtBQUVyQkMsY0FBWSxJQUZTO0FBR3JCQyxrQkFBZ0IsSUFISztBQUlyQkMsU0FBTztBQUNMQyxXQUFPLGFBREY7QUFFTEMsYUFBUztBQUNQQyxXQUFLO0FBREU7QUFGSjtBQUpjLENBQXZCOztBQVlBLHFDQUFrQlAsY0FBbEI7O0FBRUEsSUFBTVEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQVMsSUFBSVIsZUFBZUMsRUFBNUIsRUFBZ0MsV0FBVSxVQUExQztBQUNFLDREQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw4QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFNLCtDQUFHLFdBQVUsSUFBYjtBQUFOLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBUSwrQ0FBRyxXQUFVLGNBQWI7QUFBUixTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0VBREY7QUFFRSxzRUFGRjtBQUdFLDBFQUhGO0FBSUU7QUFKRjtBQURGLFNBSEY7QUFXRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsaURBQUcsV0FBVSxJQUFiO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx5QkFBZjtBQUNFO0FBREY7QUFERjtBQUpGLFNBWEY7QUFxQkU7QUFBQTtBQUFBO0FBQVksK0NBQUcsV0FBVSxjQUFiO0FBQVosU0FyQkY7QUFzQkU7QUFBQTtBQUFBO0FBQVUsK0NBQUcsV0FBVSxnQkFBYjtBQUFWLFNBdEJGO0FBdUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRSxtRUFERjtBQUVFO0FBRkY7QUF2QkYsT0FERjtBQTZCRTtBQTdCRjtBQUZGLEdBRGtCO0FBQUEsQ0FBcEI7O2tCQXFDZU8sVzs7Ozs7O0FDMURmLDBCOzs7Ozs7QUNBQSw0Qjs7Ozs7O0FDQUEsdUI7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQyxRQUFRLHdCQUFZLDRCQUFnQixFQUFFQywrQkFBRixFQUFoQixDQUFaLENBQWQ7O0FBRUE7Ozs7QUFJQSxtQkFBU0MsTUFBVCxDQUNFO0FBQUE7QUFBQSxJQUFVLE9BQU9GLEtBQWpCO0FBQ0U7QUFERixDQURGLEVBSUdHLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FKSCxFIiwiZmlsZSI6InVtZFBsYXllci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFiZDdkMDUyNWI5NzcxZTVkMGU0IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEpQbGF5ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdEpQbGF5ZXJcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEpQbGF5ZXIsIHtcbiAgaW5pdGlhbGl6ZU9wdGlvbnMsIEd1aSwgU2Vla0JhciwgQnVmZmVyQmFyLFxuICBQb3N0ZXIsIEF1ZGlvLCBUaXRsZSwgRnVsbFNjcmVlbiwgTXV0ZSwgUGxheSwgUGxheUJhciwgUmVwZWF0LFxuICBWb2x1bWVCYXIsIER1cmF0aW9uLCBDdXJyZW50VGltZSwgRG93bmxvYWQsIEJyb3dzZXJVbnN1cHBvcnRlZCxcbn0gZnJvbSAncmVhY3QtanBsYXllcic7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBpZDogJ0F1ZGlvUGxheWVyJyxcbiAga2V5RW5hYmxlZDogdHJ1ZSxcbiAgdmVydGljYWxWb2x1bWU6IHRydWUsXG4gIG1lZGlhOiB7XG4gICAgdGl0bGU6ICdCQkMgUmFkaW8gNCcsXG4gICAgc291cmNlczoge1xuICAgICAgbXAzOiAnaHR0cDovL2JiY21lZGlhLmljLmxsbndkLm5ldC9zdHJlYW0vYmJjbWVkaWFfcmFkaW80Zm1fbWZfcCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmluaXRpYWxpemVPcHRpb25zKGRlZmF1bHRPcHRpb25zKTtcblxuY29uc3QgQXVkaW9QbGF5ZXIgPSAoKSA9PiAoXG4gIDxKUGxheWVyIGlkPXtkZWZhdWx0T3B0aW9ucy5pZH0gY2xhc3NOYW1lPVwianAtc2xlZWtcIj5cbiAgICA8QXVkaW8gLz5cbiAgICA8R3VpPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC1jb250cm9scyBqcC1pY29uLWNvbnRyb2xzXCI+XG4gICAgICAgIDxQbGF5PjxpIGNsYXNzTmFtZT1cImZhXCI+ey8qIEljb24gc2V0IGluIGNzcyAqL308L2k+PC9QbGF5PlxuICAgICAgICA8UmVwZWF0PjxpIGNsYXNzTmFtZT1cImZhIGZhLXJlcGVhdFwiIC8+PC9SZXBlYXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtcHJvZ3Jlc3NcIj5cbiAgICAgICAgICA8U2Vla0Jhcj5cbiAgICAgICAgICAgIDxCdWZmZXJCYXIgLz5cbiAgICAgICAgICAgIDxQbGF5QmFyIC8+XG4gICAgICAgICAgICA8Q3VycmVudFRpbWUgLz5cbiAgICAgICAgICAgIDxEdXJhdGlvbiAvPlxuICAgICAgICAgIDwvU2Vla0Jhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianAtdm9sdW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxNdXRlPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFcIj57LyogSWNvbiBzZXQgaW4gY3NzICovfTwvaT5cbiAgICAgICAgICA8L011dGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC12b2x1bWUtc2xpZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpwLXZvbHVtZS1iYXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxWb2x1bWVCYXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZ1bGxTY3JlZW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZXhwYW5kXCIgLz48L0Z1bGxTY3JlZW4+XG4gICAgICAgIDxEb3dubG9hZD48aSBjbGFzc05hbWU9XCJmYSBmYS1kb3dubG9hZFwiIC8+PC9Eb3dubG9hZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcC10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8UG9zdGVyIC8+XG4gICAgICAgICAgPFRpdGxlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QnJvd3NlclVuc3VwcG9ydGVkIC8+XG4gICAgPC9HdWk+XG4gIDwvSlBsYXllcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGxheWVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2F1ZGlvUGxheWVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0UmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlZHV4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGpQbGF5ZXJzIH0gZnJvbSAncmVhY3QtanBsYXllcic7XG5cbmltcG9ydCBBdWRpb1BsYXllciBmcm9tICcuL2F1ZGlvUGxheWVyJztcblxuLyogUGFzcyB0aGUgalBsYXllciByZWR1Y2VyIGFuZCBpdCdzIGluaXRpYWxTdGF0ZXMgdG8gdGhlIHN0b3JlICovXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVSZWR1Y2Vycyh7IGpQbGF5ZXJzIH0pKTtcblxuLyogV3JhcCBvdXIgcGxheWVyIGluIHRoZSBSZWR1eCBQcm92aWRlciBhbmQgcmVuZGVyIHRoZSBqUGxheWVyLlxuVGhlIHByb3ZpZGVyIHNob3VsZCBnbyBhdCB0aGUgcm9vdCBvZiB5b3VyIEFwcCwganVzdCBsaWtlIFJlZHV4IGRvY3VtZW50YXRpb24gcmVjb21tZW5kcyxcbnNvIHRoYXQgYWxsIGNvbXBvbmVudHMgYmVsb3cgdGhlIFByb3ZpZGVyIGhhdmUgYWNjZXNzIHRvIHRoZSBqUGxheWVycyBzdGF0ZVxuKi9cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBdWRpb1BsYXllciAvPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==