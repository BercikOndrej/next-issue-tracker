import prisma from '@/prisma/client';
import { Card, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import IssueStatusBadge from '../issue-status-badge';

interface Props {
  params: { id: string };
}

const IssueDetail = async ({ params }: Props) => {
  const awaitedParams = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(awaitedParams.id),
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <Heading as='h2'>{issue.title}</Heading>
      <div className='flex gap-2 my-4 items-baseline'>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className='prose'>
        <ReactMarkdown className='py-1'>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetail;
