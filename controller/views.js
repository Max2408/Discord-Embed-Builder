module.exports.home = async (req, res, next) => {
    try {
        res.render('home' , {data : "null" , url : `${process.env.URL}`})
    } catch (err) {
        next(err)
    }
}