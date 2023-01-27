import {Collapse} from "antd";

const { Panel } = Collapse;


export const Faq = () => {
  return (
    <>
      <div className="text-2xl text-primary font-bold border-l border-neutral border-l-2 pl-16">
        <div>Frequently Asked Question (FAQs)</div>
        <div className="mt-4">
          <Collapse accordion bordered={false} ghost activeKey={1}>
            <Panel header="Why study abroad?" key="1">
              <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                Its good to learn from other cultures and to learn in a whole new cosmopolitan environment is awesome.
                It helps in acquisition of a modern way of doing things and also provides better facilities to learn with.
              </div>
            </Panel>
            <Panel header="How many days does it take to get birth cert done?" key="2">
              <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                We typically get your birth certificates done with 2 business weeks.
                That is 14 days from commencement.
              </div>
            </Panel>
            <Panel header="How do I get started with my application to study in abroad?" key="3">
              <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                <ol className="list-decimal list-inside">
                  <li>Choose your programme you intend to study</li>
                  <li>Provide us with your preferred country if any</li>
                  <li>Provide us with your contact details</li>
                  <li>Provide your current level of education</li>
                </ol>
              </div>
            </Panel>
            <Panel header="This is my first time travelling, what do I need to get my Visa?" key="4">
              <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                <div>
                  You will need to first have your passport. If you do not have it already, please contact.
                  Then let us know where you want to go, we handle the rest for you.
                </div>
              </div>
            </Panel>
            <Panel header="Are there Scholarship Programmes Available?" key="5">
              <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                <div>
                  YES! Scholarships are available for most countries
                </div>
              </div>
            </Panel>

            <Panel header="  What's Next After Gaining My Acceptance Letter?" key="6">
              <div className="bg-neutral rounded-lg text-gray-200 px-3 py-2">
                <div>
                  At this stage, we guide you on the necessary documents that the embassy or consulate require from yourself, parents or guardians to decide whether to give you the visa or not.
                  Our job is to provide you with the vital tools which would enable you to get the visa.
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}
