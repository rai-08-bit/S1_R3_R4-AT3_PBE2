import { Router } from "express";
const routes = Router();

import categoriaRoutes from "./categoriasRoutes.js";
import produtoRoutes from "./produtosRoutes.js";
import clienteRoutes from "./clientesRoutes.js";


routes.use('/categorias', categoriaRoutes);
routes.use('/produtos', produtoRoutes);
routes.use('/clientes', clienteRoutes);

export default routes;