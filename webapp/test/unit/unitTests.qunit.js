/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"studenthmucomsaptrainingux402repository/ux402_repository/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});