import prisma from '@/prisma/client';
import { Card, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react';
import IssueStatusBadge from '../issue-status-badge';

interface Props {
  params: { id: string };
}

const IssueDetail = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <Heading as='h2'>{issue.title}</Heading>
      <div className='flex gap-2 my-2 items-baseline'>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card>
        <Text>{issue.description}</Text>
      </Card>
    </div>
  );
};

export default IssueDetail;
