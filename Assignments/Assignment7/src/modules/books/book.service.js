import mongoose from "mongoose";
import bookModel from "../../DB/models/book.model.js";

export const insertBook = async (req, res, next) => {
    const db = mongoose.connection.db;
    const book = await db.collection("books").insertOne(req.body);
    res.status(201).json(book);
};

export const insertManyBooks = async (req, res, next) => {
    const db = mongoose.connection.db;
    const books = await db.collection("books").insertMany(req.body);
    res.status(201).json(books);
};

export const updateBook = async (req, res, next) => {
    const book = await bookModel.updateOne(
        { title: req.params.title },
        { $set: req.body },
    );
    res.json(book);
};

export const findBookTitle = async (req, res, next) => {
    const book = await bookModel.findOne({ title: req.query.title });
    res.json(book);
};

export const findBooksYear = async (req, res, next) => {
    const books = await bookModel.find({
        year: { $gte: Number(req.query.from), $lte: Number(req.query.to) },
    });
    res.json(books);
};

export const findBooksGenre = async (req, res, next) => {
    const books = await bookModel.find({
        genres: req.query.genre,
    });
    res.json(books);
};

export const bokSkipLimit = async (req, res, next) => {
    const books = await bookModel.find().sort({ year: -1 }).limit(3).skip(2);
    res.json(books);
};

export const yearInteger = async (req, res, next) => {
    const books = await bookModel.find({ year: { $type: "number" } });
    res.json(books);
};

export const excludeGenres = async (req, res, next) => {
    const books = await bookModel.find({
        genres: { $nin: ["Horror", "Science Fiction"] },
    });
    res.json(books);
};

export const deleteBeforeYear = async (req, res, next) => {
    const books = await bookModel.deleteMany({ year: { $lt: req.query.year } });
    res.json(books);
};

export const agg1 = async (req, res, next) => {
    const books = await bookModel.aggregate([
        { $match: { year: { $gt: 2000 } } },
        { $sort: { year: -1 } },
    ]);
    res.json(books);
};

export const agg2 = async (req, res, next) => {
    const books = await bookModel.aggregate([
        { $match: { year: { $gt: 2000 } } },
        { $project: { _id: 0, title: 1, author: 1, year: 1 } },
    ]);
    res.json(books);
};

export const agg3 = async (req, res, next) => {
    const books = await bookModel.aggregate([
        { $unwind: "$genres" }
    ]);
    res.json(books);
};

export const agg4 = async (req, res, next) => {
    const books = await bookModel.aggregate([
        {$lookup:{
            from: "books",
            localField:"book_id",
            foreignField:"_id",
            as: "book_details"
        }}
    ]);
    res.json(books);
};