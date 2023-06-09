import {
  createProduct,
  deleteProductById,
  findProductById,
  updateProductById,
} from "../models/Product.js";

export const postProduct = (req, res) => {
  createProduct(req.body)
    .then((product) => res.status(201).json(product))
    .catch((err) => res.status(500).json(err));
};

export const getProduct = (req, res) => {
  findProductById(req.params.id)
    .then((product) => {
      if (!product)
        return res.status(404).json({ message: "product not found" });
      res.status(200).json(product);
    })
    .catch((err) =>
      res.status(404).json({ message: "product not found", err })
    );
};

export const updateProduct = (req, res) => {
  updateProductById(req.params.id, { $set: req.body })
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(409).json(err));
};

export const deleteProduct = (req, res) => {
  deleteProductById(req.params.id)
    .then((product) => {
      if (!product)
        return res.status(404).json({ message: "product not found to delete" });
      res
        .status(202)
        .json({ success: true, message: "product deleted", product });
    })
    .catch((err) => res.status(500).json(err));
};
