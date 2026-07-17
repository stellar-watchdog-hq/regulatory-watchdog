import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '../../../components/ui/card';
import { SpinnerIcon } from '../../../components/icons';
import { ComplianceService } from '../services/compliance.service';

export const RequirementCreate: React.FC = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', jurisdiction: 'EU-MiCA' });

  const handlePublishAction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    
    setSubmitting(true);
    try {
      // Pushing to our live API!
      await ComplianceService.create({
        title: formData.title,
        description: formData.description,
        jurisdiction: formData.jurisdiction,
        status: 'PENDING_REVIEW',
      });
      navigate('/compliance');
    } catch (err) {
      console.error("Failed to create checklist", err);
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight text-left">Provision New Requirement</h1>
        <p className="text-sm text-slate-500 mt-1 text-left">Map configuration frameworks into the active verification logic engine.</p>
      </div>

      <form onSubmit={handlePublishAction} className="text-left">
        <Card>
          <CardContent className="p-8 space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Requirement Identifier Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Transaction Threshold Throttling Pipeline"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Scope Parameters Description</label>
              <textarea
                required
                rows={4}
                placeholder="Detail the operational checklist conditions required to clear internal compliance verification routines..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg outline-none resize-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 leading-relaxed"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Jurisdiction Scope Authority</label>
              <select
                value={formData.jurisdiction}
                onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
              >
                {['EU-MiCA', 'FATF', 'US-SEC', 'US-OFAC', 'UK-FCA'].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </CardContent>

          <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 rounded-b-xl">
            <Link to="/dashboard" className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Cancel Execution
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-sm cursor-pointer"
            >
              {submitting && <SpinnerIcon className="w-3.5 h-3.5 text-indigo-200" />}
              {submitting ? 'Publishing Frame...' : 'Deploy Framework Requirement'}
            </button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default RequirementCreate;