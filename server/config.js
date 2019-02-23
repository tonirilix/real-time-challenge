const config = {
    rethinkdb: {
        host: "localhost",
        port: 28015,
        authKey: "",
        db: "the_taxi_company",
        table: "timeline"
    },
    deepstream: {
        url: '0.0.0.0:6020/deepstream'
    }
}

module.exports = {
    config
}