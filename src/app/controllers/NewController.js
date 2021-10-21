class NewController {
    index(req,res){
        res.render('news')
    }
    show(req,res){
        res.send('new detall')
    }
}

module.exports = new NewController;