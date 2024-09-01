import Projetcs from './projects'

const commands = {
    "welcome": (
        <div className='command-output' key='hist-0' id='hist-0'>
            <div className="ascii-banner secondary-color">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.---.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\.@-@./<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/`\_/`\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="primary-color">Welcome&nbsp;to&nbsp;Bea's</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;_&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="primary-color">Portifolio!</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)|_<br/>
                &nbsp;&nbsp;&nbsp;/`\_`)&nbsp;&nbsp;(_/&nbsp;\<br/>
                &nbsp;&nbsp;&nbsp;\__/'---'\__/
            </div>
            <br/>
            <div>For a list of available commands, type '<span className='highlight'>help</span>'</div>
        </div>
    ),
    "help": (
        <div className='command-output'>
            <div className='help-list'><span className='highlight'>whois</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more about me</div>
            <div className='help-list'><span className='highlight'>projects</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view coding projects</div>
            <div className='help-list'><span className='highlight'>contact</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ways to reach me</div>
            <div className='help-list'><span className='highlight'>kissme</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get a smack on the cheek</div>
            <div className='help-list'><span className='highlight'>clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear terminal</div>
            <div className='help-list'><span className='highlight'>arrow up/down</span>&nbsp;&nbsp;&nbsp;&nbsp;navegate command history</div>
        </div>
    ),
    "whois": (
        <div className='command-output'>
            Hello there! I'm Beatriz, Bsc Computer Science. I've found my groove as a data engineer and application developer. My journey revolves around merging technology with creativity to craft innovative solutions. From the lively city of Rio de Janeiro, I navigate the dynamic world of technology, transforming data into impactful applications.
        </div>
    ),
    "whoami": (
        <div className='command-output'>
            IDK
        </div>
    ),
    "projects": (
        <div className='command-output'>
            <Projetcs />
            {/* Still curating... most projects are offline, on GitHub, or confidential. */}
        </div>
    ),
    "contact": (
        <div className='command-output'>
            You can reach me on <a href="https://www.linkedin.com/in/beatrizfoliveira/" target="_blank">Linkein</a> or at <a href="mailto:foliveira.beatriz@gmail.com" target="_blank">foliveira.beatriz@gmail.com</a>.
        </div>
    ),
    "kissme": (
        <div className='command-output'>
            mwah!
        </div>
    ),
};
export default commands
