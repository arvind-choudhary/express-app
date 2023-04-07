import { Router } from "express";

const _authRoutes = Router();
_authRoutes.all('/auth');
_authRoutes.post('/login');
_authRoutes.post('/logout');
_authRoutes.post('/forgot-password');
_authRoutes.post('/reset-password');
_authRoutes.post('/change-password');

export { _authRoutes };