const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// json
app.use(express.json());

// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// test api 
app.length('/test', (req, res) => {
    try{
        res.status(200).json({ message: 'API is working' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// get all users
app.length('/users', async(req, res) => {
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// get user by id
app.get('/users/:id', async(req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
});