import { Router } from 'express'
import FibonacciController from './FibonacciController'
const router = Router()

router.get('/', (req, res) => {
    res.render('home')
})
router.post('/input', FibonacciController.createTicket)
router.get('/input', FibonacciController.testTicket)
router.get('/output', FibonacciController.checkTicket)

export default router
