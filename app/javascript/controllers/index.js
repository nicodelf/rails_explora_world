// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { application } from "./application"
// import { definitionsFromContext } from "stimulus/webpack-helpers"
import CategoriesController from "./categories_controller"
application.register("categories", CategoriesController)
// const application = Application.start()
// const context = require.context("controllers", true, /_controller\.js$/)
// application.load(definitionsFromContext(context))
import ChatroomSubscriptionController from "./chatroom_subscription_controller"
application.register("chatroom", ChatroomSubscriptionController)

import DashboardController from "./dashboard_controller"
application.register("dashboard", DashboardController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import HpnavbarController from "./hpnavbar_controller"
application.register("hpnavbar", HpnavbarController)

import MaindashboardController from "./maindashboard_controller"
application.register("maindashboard", MaindashboardController)

import MapboxController from "./mapbox_controller"
application.register("mapbox", MapboxController)

import SlotsDisplayController from "./slots_display_controller"
application.register("slots_display", SlotsDisplayController)

import TypedJsController from "./typed_js_controller"
application.register("typed_js", TypedJsController)

import VideoCallController from "./video_call_controller"
application.register("video_call", VideoCallController)
