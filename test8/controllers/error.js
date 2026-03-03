exports.error_404 = (req, res, next) => {
    res.status(404).render('store/404', { pageTitle: 'error loading 404' });
}