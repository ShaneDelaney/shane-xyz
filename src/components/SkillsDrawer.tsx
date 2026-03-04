'use client';

import { Drawer } from 'vaul';

const skills = [
  {
    category: 'Editorial & Production',
    items: ['Editorial Calendar Management', 'Story Lifecycle Management', 'Content Pipeline Management', 'Resource Tracking (DRIs)', 'Editorial Instructions (EIs)', 'Content Programming', 'Stat Review Process'],
  },
  {
    category: 'Operations & Tools',
    items: ['Airtable', 'Jira', 'Confluence', 'Asana', 'Salesforce', 'Figma', 'CMS Platforms', 'Technical Metadata Management', 'Project Governance'],
  },
  {
    category: 'Strategy & Analytics',
    items: ['XFN Alignment', 'Stakeholder Management', 'Performance Data Synthesis', 'Competitive Gap Analysis', 'Process Optimization'],
  },
  {
    category: 'AI & Dev Tools',
    items: ['Claude Code', 'Cursor', 'GitHub', 'SuperWhisper'],
  },
];

export function SkillsDrawer({ children }: { children: React.ReactNode }) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        {children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl outline-none shadow-2xl">
          {/* Handle */}
          <div className="flex justify-center pt-4 pb-2">
            <div className="w-10 h-1 rounded-full bg-gray-200" />
          </div>

          <div className="px-6 pt-4 pb-10 max-h-[80vh] overflow-y-auto">
            <Drawer.Title className="text-xl font-semibold tracking-tight text-gray-900 mb-8">
              Skills & Tools
            </Drawer.Title>

            <div className="grid sm:grid-cols-2 gap-8">
              {skills.map(group => (
                <div key={group.category}>
                  <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs text-gray-600 bg-gray-50 border border-gray-100 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
