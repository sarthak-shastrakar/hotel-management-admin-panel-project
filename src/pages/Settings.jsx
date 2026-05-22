import { Save } from 'lucide-react';

const Settings = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Application Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="card">
          <h3 className="mb-6">Contact & Support Settings</h3>
          
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Support Email</label>
                <input type="email" className="form-input" defaultValue="support@hotelpro.com" />
              </div>

              <div className="form-group">
                <label className="form-label">Support Phone Number</label>
                <input type="tel" className="form-input" defaultValue="+1 (800) 123-4567" />
              </div>
            </div>

            <div className="flex justify-end mt-6 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
              <button type="button" className="btn btn-primary">
                <Save size={16} /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
