module.exports = {
    success: {
        s0: {
            code: "SponsorCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "SpponsorUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "SponsorFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "SponsorDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "NoSponsor",
            type: "success"
        },
        s6: {
            http: 200,
            code: "Activated",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "SponsorNotFound",
            type: "error"
        }
    }
}