import express from 'express';

const home = express.Router();

home.get('/', (req, res) => {
    return res.status(404)
    .json({
        message: 'Weconnect home'
    });
});

home.get('*', (req, res) => res.status(404)
.json({
    message: 'Page not found'
}));

export default home;