const medicalRecordSchema = new mongoose.Schema(
    {
        patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        diagnosis: { type: String, required: true },
        prescriptions: { type: String },
        notes: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
