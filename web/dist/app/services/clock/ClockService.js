module.exports = ClockService = {

    resource: '/api(:/action)',

    GET: function(ctx, http) {
        this.clockApi(ctx, http)
    },

    POST: function(ctx, http) {
        this.clockApi(ctx, http)
    },

    clockApi: function(ctx, http) {
        try {
            http.reply({
                'action': http.data.action,
                'payload': ctx.clock[http.data.action](http.data)
            });
        } catch (error) {
            throwError(error, ctx);
        }
    },

    throwError: function(error, ctx) {
        ctx.log.error(error);
        throw {
            status: 500,
            error: error
        };
    }

};