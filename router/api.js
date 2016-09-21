'use strict';

const api = require('express').Router();
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

// TODO: login
api.post('/login', function(req, res, next) {});

// return the job records
api.post('/jobs', function(req, res, next) {
    function reject() {
        res.status(500).send('internal error');
    }

    function resolve(jobs) {
        res.send({
            jobs: jobs
        });
    }
    MongoClient.connect(config.dbUri, function(err, db) {
        if (err) {
            console.log('[error]', 'db connection when retrieving jobs');
            reject();
        }
        db.collection('jobs').find()
            .toArray(function(err, jobs) {
                // if error, it will return null
                resolve(jobs);
                db.close();
            });
    });
});

module.exports = api;
