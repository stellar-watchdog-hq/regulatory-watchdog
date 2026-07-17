import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../../../components/ui/card';
import { ComplianceService } from '../services/compliance.service';
import type { ComplianceChecklist } from '../types/compliance';

export const RequirementDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recordContext, setRecordContext] = useState<ComplianceChecklist | null>(null);

  useEffect(() => {
    if (id) {
      ComplianceService.getOne(id).then(setRecordContext).catch(console.error);
    }
  }, [id]);

  if (!recordContext) {
    return <div className="p-8 text-white">Loading audit logs...</div>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 tracking-wide">
              {recordContext.jurisdiction}
            </span>
            <span className="text-slate-400 text-xs font-mono">{recordContext.id}</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-2">{recordContext.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/compliance" className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Return to Matrix
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Framework Parameter Bounds</h3>
            </CardHeader>
            <CardContent>
              <p className="text-base text-slate-700 leading-relaxed font-normal">{recordContext.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Historical Audit Trail Log</h3>
            </CardHeader>
            <CardContent className="py-6">
              <div className="relative border-l border-slate-200 pl-6 space-y-6">
                <div className="relative">
                  <span className={`absolute -left-[30px] top-1 w-2 h-2 rounded-full ring-4 ring-white ${recordContext.status === 'PASSED' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {new Date(recordContext.updatedAt).toLocaleDateString()} · {new Date(recordContext.updatedAt).toLocaleTimeString()}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">Status Shifted: {recordContext.status.replace('_', ' ')}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Automated system record tracking update applied.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">State Summary</h3>
            </CardHeader>
            <CardContent className="divide-y divide-slate-100 text-sm p-0">
              <div className="px-6 py-3.5 flex items-center justify-between">
                <span className="text-slate-400 font-medium">Evaluation Status</span>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-50 text-slate-700 border border-slate-200 uppercase tracking-wide">
                  {recordContext.status.replace('_', ' ')}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequirementDetail;