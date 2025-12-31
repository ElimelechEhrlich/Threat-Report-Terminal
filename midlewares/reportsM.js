async function validateFieldsInBody(req, res, next) {
    try {
        if (req.body.fieldCode && req.body.location && req.body.threatLevel && req.body.description ) {
            next()    
        }
        else res.sendStatus(409)
    } catch (error) {
        res.status(500).json({ error })
    }
}

async function validateTypeOfThreatLevel(req, res, next) {
    try {
        if (Number.isInteger(req.body.threatLevel)) {
            next()
        }
        else res.json("threatLevel field in body is not numeric.")
    } catch (error) {
        res.status(500).json({ error })  
    }
}

async function validateTimestampIsDate(req, res, next) {
    try {
        if (req.body.timestamp) {
            if (req.body instanceof Date && !isNaN((req.body.timestamp).valueOf())) {
            next()
            }
            else res.json("timestamp field in body is not date value.")
        }
        else next()
    } catch (error) {
        res.status(500).json({ error })  
    }
}

export {
    validateFieldsInBody,
    validateTypeOfThreatLevel,
    validateTimestampIsDate
}