import { getData, insertData, updateDataById, replaseDataById, deleteDataById } from "../DAL/intel_reports.js"

async function addReport(req, res) {
    try {
        const { fieldCode, location, threatLevel, description, timestamp = new Date() } = req.body
        const result = await insertData({ fieldCode, location, threatLevel, description, timestamp, confirmed: false })
        res.json(result)
    } catch (error) {
        res.status(500).json({ error })
    }
}

async function getReports(req, res) {
    try {
        const result = await getData()
        res.json(result)
    } catch (error) {
        res.status(500).json()
    }
}

async function getReportsWithHighThreatLevel(req, res) {
    try {
        const result = await getHighThreatLevel(4)
        res.json(result)
    } catch (error) {
        res.status(500).json()
    }
}

async function confirmReport(req, res) {
    try {
        const result = await updateDataById(req.params.id, {confirmed: true})
        res.json(result)
    } catch (error) {
        res.status(500).json()
    }
}

async function deleteReportById(req, res) {
    try {
        const result = await deleteDataById(req.params.id)
        res.json(result)
    } catch (error) {
        res.status(500).json()
    }
} 

export {
    addReport,
    validateFieldsInBody,
    getReports,
    getReportsWithHighThreatLevel,
    confirmReport,
    deleteReportById
}