import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Assign from "../pages/Assign";
import DeliveryReportSubmit from "../pages/DeliveryReportSubmit";
import Inventory from "../pages/Inventory";
import Login from "../pages/Login";
import ManageAllOrders from "../pages/ManageAllOrders";
import ManageDeliveryReports from "../pages/ManageDeliveryReports";
import ManageAssignments from "../pages/ManageAssignments";
import SubjectsStudent from "../pages/SubjectsStudent";
import ManagerApprovedOrders from "../pages/ManagerApprovedOrders";
import TeacherDashboard from "../pages/TeacherDashboard";
import ManageServices from "../pages/ManageServices";
import ManageStudents from "../pages/ManageStudents";
import ManageClasses from "../pages/ManageClasses";
import OfficerDashboard from "../pages/OfficerDashboard";
import OfficerOrders from "../pages/OfficerOrders";
import Register from "../pages/Register";
import SiteManagerDashboard from "../pages/SiteManagerDashboard";
import StudentSubjectAssingment from "../pages/StudentSubjectAssingment";
import StudentDashboard from "../pages/StudentDashboard";

import { AuthContext } from "../contexts/AuthContext";

const Routes = () => {
	const { loggedIn } = useContext(AuthContext);

	console.log(loggedIn);

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />

			<Route exact path="/auth/teacher/dashboard" component={TeacherDashboard} />
			<Route exact path="/auth/teacher/students" component={ManageStudents} />
			<Route exact path="/auth/teacher/modules" component={ManageClasses} />
			<Route exact path="/auth/teacher/assignments" component={ManageAssignments} />

			<Route exact path="/auth/student/dashboard" component={StudentDashboard} />
			<Route exact path="/auth/student/modules" component={SubjectsStudent} />
			<Route exact path="/auth/student/services" component={ManageServices} />

			<Route exact path="/auth/student/assignment" component={StudentSubjectAssingment} />
		</Switch>
	);
};

export default Routes;
