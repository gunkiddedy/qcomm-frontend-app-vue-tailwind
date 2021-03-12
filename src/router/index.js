import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const route = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/projects/:id',
		name: 'ProjectOverview',
		props: true,
		component: () => import('../views/ProjectOverview.vue'),
	},
	{
		path: '/task-detail/:id',
		name: 'ProjectTaskDetail',
		props: true,
		component: () => import('../views/ProjectTaskDetail.vue'),
	},
	{
		path: '/projects/:id/progress',
		name: 'ProjectTask',
		props: true,
		component: () => import('../views/ProjectTask.vue'),
	},
	{
		path: '/projects/:id/documents',
		name: 'ProjectDocument',
		props: true,
		component: () => import('../views/ProjectDocument.vue'),
	},
	{
		path: '/project-new-task',
		name: 'ProjectNewTask',
		component: () => import('../views/ProjectNewTask.vue'),
	},
	{
		path: '/projects',
		name: 'ProjectList',
		component: () => import('../views/ProjectList.vue'),
	},
	{
		path: '/project-form/:id',
		name: 'ProjectFormEdit',
		props: true,
		component: () => import('../views/ProjectFormEdit.vue'),
	},
	{
		path: '/project-form',
		name: 'ProjectForm',
		component: () => import('../views/ProjectForm.vue'),
	},
	{
		path: '/broadcast-form',
		name: 'BroadcastForm',
		component: () => import('../views/BroadcastForm.vue'),
	},
	{
		path: '/category-form',
		name: 'CategoryForm',
		component: () => import('../views/CategoryForm.vue'),
	},
	{
		path: '/group-form',
		name: 'GroupForm',
		component: () => import('../views/GroupForm.vue'),
	},
	{
		path: '/company-form',
		name: 'CompanyForm',
		component: () => import('../views/CompanyForm.vue'),
	},
	{
		path: '/user-form',
		name: 'UserForm',
		component: () => import('../views/UserForm.vue'),
	},
	{
		path: '/user-form-edit/:id',
		name: 'UserFormEdit',
		props: true,
		component: () => import('../views/UserFormEdit.vue'),
	},
	{
		path: '/users',
		name: 'UserList',
		component: () => import('../views/UserList.vue'),
	},
	{
		path: '/user-kpi',
		name: 'UserKpi',
		component: () => import('../views/UserKpi.vue'),
	},
	{
		path: '/user-kpi-table',
		name: 'UserKpiTable',
		component: () => import('../views/UserKpiTable.vue'),
	},
	{
		path: '/user-password',
		name: 'UserPassword',
		component: () => import('../views/UserPassword.vue'),
	},
	{
		path: '/categories',
		name: 'CategoryList',
		component: () => import('../views/CategoryList.vue'),
	},
	{
		path: '/companies',
		name: 'CompanyList',
		component: () => import('../views/CompanyList.vue'),
	},
	{
		path: '/groups',
		name: 'GroupList',
		component: () => import('../views/GroupList.vue'),
	},
	{
		path: '/users/:id',
		name: 'UserProfile',
		component: () => import('../views/UserProfile.vue'),
		props: true
	},
	{
	  path: '/home/:id',
	  name: 'Home',
	  component: () => import('../views/Home.vue'),
	  props: true
	},
]

const router = new VueRouter({
	// routes
	mode: 'history',
  	routes: route
})

export default router
