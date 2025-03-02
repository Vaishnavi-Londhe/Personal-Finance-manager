// backend/controllers/transactionController.js (Corrected)
const Transaction = require('../models/transactionModel');

exports.addTransaction = async (req, res) => {
    const { amount, type, category } = req.body;
    try {
        const transaction = new Transaction({ user: req.user.id, amount, type, category });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
