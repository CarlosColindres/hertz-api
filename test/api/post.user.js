// loads environment variables from .env
require('dotenv').config()
const { expect } = require('chai')
const request = require('supertest')

const server = require('../../src/api/server')
const {connect, close} = require('../../connect')

const DB_URL = process.env.DB_URL

describe('POST /user', () => {

    before( done => {
        connect(DB_URL)
            .then(() => done())
            .catch(err => done(err))
    })


    after( done => {
      close()
        .then(() => done())
        .catch(err => done(err))
    })

    it('OK, adding a new userId', done => {

        request(server).post('/api/user')
            .send({ userId: Math.random() })
            .then(res => {
                const body = res.body
                expect(body).to.contain.property('userId')
                expect(body).to.contain.property('userRegistered')
                done()
            })
            .catch(err => done(err))
    })

     it('Fail, userId required', done => {
       request(server)
         .post('/api/user')
         .send({  })
         .then(res => {
             const body = res.body
           expect(body.message).to.equal('userId is required')
           done()
         })
         .catch(err => done(err))
     })

})
