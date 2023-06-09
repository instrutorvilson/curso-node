const express = require('express')
const router = express.Router()
const mdLogin = require('./middleware/middlware-login')
const mdAdm = require('./middleware/middleware-adm')

const contato = require('./contatos')
const usuario = require('./usuarios')
const compromisso = require('./compromissos')

/**Conjunto de rotas para contato */
router.get('/contato', mdLogin, contato.listar)   
router.get('/contato/:idcontato',contato.listarPorId)
router.get('/contato/user/:iduser',contato.listarPorUser)
router.post('/contato', mdLogin, contato.inserir)
router.put('/contato/:idcontato',contato.alterar)
router.delete('/contato/:idcontato',contato.excluir)

/**Conjunto de rota para usuario */
router.post('/usuario', usuario.registrar)
router.post('/usuario/login',usuario.login)

/** Rotas de compromisso */
router.post('/compromisso', compromisso.inserir)

module.exports = router