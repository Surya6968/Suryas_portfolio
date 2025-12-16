import React from 'react';
        import { useParams } from 'react-router-dom';
        import PageWrapper from '../components/PageWrapper';
        import { faker } from '@faker-js/faker';
        
        const ProjectDetailPage: React.FC = () => {
          const { id } = useParams<{ id: string }>();
        
          return (
            <PageWrapper>
              <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="mb-12">
                  <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                     <video
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                        poster={`https://img-wrapper.vercel.app/image?url=https://placehold.co/1920x1080/000000/FFFFFF/png?text=Project+${id}`}
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-a-man-sits-on-the-roof-of-a-car-and-records-a-video-of-42949-large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
        
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{faker.company.catchPhrase()}</h1>
                    <p className="text-lg text-light-gray">{faker.lorem.paragraphs(3)}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Project Info</h2>
                    <ul className="space-y-2 text-light-gray">
                      <li><strong>Client:</strong> {faker.company.name()}</li>
                      <li><strong>Year:</strong> {faker.date.past().getFullYear()}</li>
                      <li><strong>Role:</strong> {faker.name.jobTitle()}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </PageWrapper>
          );
        };
        
        export default ProjectDetailPage;
