-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2024 a las 16:23:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app_distribuidora_licores`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `cate_id` int(4) NOT NULL,
  `cate_nombre` varchar(100) NOT NULL,
  `cate_fecha_registro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`cate_id`, `cate_nombre`, `cate_fecha_registro`) VALUES
(1, 'Vinos', '2024-09-23 01:07:37'),
(2, 'Cervezas', '2024-09-23 01:07:37'),
(3, 'Licores', '2024-09-23 01:07:37'),
(4, 'Cocteles y Premix', '2024-09-23 01:07:37'),
(5, 'Champaña y Espumosos', '2024-09-23 01:07:37'),
(6, 'Bebidas sin alcohol', '2024-09-23 01:07:37'),
(7, 'Destilados Premium', '2024-09-23 01:07:37'),
(8, 'Accesorios para bebidas', '2024-09-23 01:07:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_pedido`
--

CREATE TABLE `detalles_pedido` (
  `det_id` int(4) NOT NULL,
  `ped_id` int(4) DEFAULT NULL,
  `prod_id` int(11) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `dir_id` int(4) NOT NULL,
  `usu_id` int(4) DEFAULT NULL,
  `dir_direccion` varchar(255) DEFAULT NULL,
  `dir_fecha_registro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_pedido`
--

CREATE TABLE `estados_pedido` (
  `est_id` int(4) NOT NULL,
  `est_descripcion` varchar(50) NOT NULL,
  `est_fecha_registro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estados_pedido`
--

INSERT INTO `estados_pedido` (`est_id`, `est_descripcion`, `est_fecha_registro`) VALUES
(1, 'Pendiente', '2024-09-23 01:07:37'),
(2, 'En preparación', '2024-09-23 01:07:37'),
(3, 'En camino', '2024-09-23 01:07:37'),
(4, 'Entregado', '2024-09-23 01:07:37'),
(5, 'Cancelado', '2024-09-23 01:07:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `ped_id` int(4) NOT NULL,
  `usu_id` int(4) DEFAULT NULL,
  `fecha_pedido` datetime DEFAULT current_timestamp(),
  `total_pedido` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `prod_id` int(4) NOT NULL,
  `prod_nombre` varchar(100) NOT NULL,
  `prod_descripcion` text DEFAULT NULL,
  `prod_precio` decimal(10,2) NOT NULL,
  `prod_stock` int(11) NOT NULL,
  `cate_id` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento_pedidos`
--

CREATE TABLE `seguimiento_pedidos` (
  `seg_id` int(4) NOT NULL,
  `ped_id` int(11) DEFAULT NULL,
  `seg_fecha_hora` datetime DEFAULT current_timestamp(),
  `est_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usu_id` int(4) NOT NULL,
  `usu_nombre` varchar(100) NOT NULL,
  `usu_apellido` varchar(100) NOT NULL,
  `usu_email` varchar(100) NOT NULL,
  `usu_contrasena` varchar(255) NOT NULL,
  `usu_telefono` varchar(20) DEFAULT NULL,
  `usu_fecha_registro` datetime DEFAULT current_timestamp(),
  `usu_rol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usu_id`, `usu_nombre`, `usu_apellido`, `usu_email`, `usu_contrasena`, `usu_telefono`, `usu_fecha_registro`, `usu_rol`) VALUES
(1, 'Santiago', 'Jaimes Pinilla', 'sjaimes@gmail.com', '$2a$10$vux72A859bW7VC1VjrHVsO9NxXATBBY2CW0sCxBPtzAUIQbqP31tS', '3022937045', NULL, 'ADMIN'),
(2, 'Jose', 'Carvajal', 'jcarvajal@gmail.com', '$2a$10$d5EJ90Adj4yGqRGjYYOWSuc6v82z5..aDg/70AJGqN1bshmO7SVzG', '3025689898', '2024-09-26 10:50:20', 'USER');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`cate_id`),
  ADD UNIQUE KEY `cate_nombre` (`cate_nombre`);

--
-- Indices de la tabla `detalles_pedido`
--
ALTER TABLE `detalles_pedido`
  ADD PRIMARY KEY (`det_id`),
  ADD KEY `ped_id` (`ped_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`dir_id`),
  ADD KEY `usu_id` (`usu_id`);

--
-- Indices de la tabla `estados_pedido`
--
ALTER TABLE `estados_pedido`
  ADD PRIMARY KEY (`est_id`),
  ADD UNIQUE KEY `est_descripcion` (`est_descripcion`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`ped_id`),
  ADD KEY `usu_id` (`usu_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `cate_id` (`cate_id`);

--
-- Indices de la tabla `seguimiento_pedidos`
--
ALTER TABLE `seguimiento_pedidos`
  ADD PRIMARY KEY (`seg_id`),
  ADD KEY `ped_id` (`ped_id`),
  ADD KEY `est_id` (`est_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`),
  ADD UNIQUE KEY `usu_email` (`usu_email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `cate_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `detalles_pedido`
--
ALTER TABLE `detalles_pedido`
  MODIFY `det_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `dir_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estados_pedido`
--
ALTER TABLE `estados_pedido`
  MODIFY `est_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `ped_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `prod_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `seguimiento_pedidos`
--
ALTER TABLE `seguimiento_pedidos`
  MODIFY `seg_id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usu_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalles_pedido`
--
ALTER TABLE `detalles_pedido`
  ADD CONSTRAINT `detalles_pedido_ibfk_1` FOREIGN KEY (`ped_id`) REFERENCES `pedidos` (`ped_id`),
  ADD CONSTRAINT `detalles_pedido_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `productos` (`prod_id`);

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `direcciones_ibfk_1` FOREIGN KEY (`usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`usu_id`) REFERENCES `usuarios` (`usu_id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `categorias` (`cate_id`);

--
-- Filtros para la tabla `seguimiento_pedidos`
--
ALTER TABLE `seguimiento_pedidos`
  ADD CONSTRAINT `seguimiento_pedidos_ibfk_1` FOREIGN KEY (`ped_id`) REFERENCES `pedidos` (`ped_id`),
  ADD CONSTRAINT `seguimiento_pedidos_ibfk_2` FOREIGN KEY (`est_id`) REFERENCES `estados_pedido` (`est_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
