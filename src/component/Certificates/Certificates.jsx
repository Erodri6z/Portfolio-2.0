import '../../styles/certificate.scss'
import GeneralAssembly from '../../assets/CertificateAssets/GA-Certificate.png'
import HKJSBasic from '../../assets/CertificateAssets/HK-Javascript-Basic.png'

const Certificates = () => {
  const certificates = [{
    title: "GA",
    image: GeneralAssembly
  },{
    title: "HK JavaScript Basic",
    image: HKJSBasic
  }]

  return (
    <div className="certifications">
      <h1 className='title'>Certificates</h1>
      <div>
        
      </div>
    </div>
  )
}

export default Certificates