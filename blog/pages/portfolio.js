import Layout from '../components/layout';
import Image from 'next/image'

export default function Portfolio() {
    return (
        <Layout>
            <section>

            <h2>Portfolio</h2>
            {/* Cards */}
            {/* Each card one project */}
            {/* Links to page describing project in more detail */}
            <div className='row'>

                <div className='col'>
                    <div className='card mb-3' style={{width: '30rem'}}>
                        
                        <Image
                        src={`/images/default.png`}
                        width="960px"
                        height="480px"
                        layout='responsive'
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Blog Website
                            </h5>
                            <p className='card-text'>
                                Website created to document my work over Summer of 2022 and other work.
                                Created using NextJS, React and Bootstrap.
                            </p>
                        </div>
                    </div>
                </div>



            </div>


            </section>
            
        </Layout>

    );
}