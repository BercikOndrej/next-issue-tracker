'use client';

import { Button, Heading, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import React from 'react';

const CreateIssuePage = () => {
  return (
    <div>
      <Heading className=''>Create new issue</Heading>
      <div className='space-y-4 mt-6 max-w-xl'>
        <TextField.Root placeholder='Issue title' />
        <SimpleMDE />
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default CreateIssuePage;
