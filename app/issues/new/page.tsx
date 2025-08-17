'use client';

import { Button, Callout, Heading, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { MdError } from 'react-icons/md';

interface FormData {
  title: string;
  description: string;
}

const CreateIssuePage = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const router = useRouter();
  const [error, setError] = useState('');

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Status code: ${response.status}`);
      }

      router.push('/issues');
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className='space-y-4 mt-4 max-w-xl'>
      <Heading>Create new issue</Heading>
      {error && (
        <Callout.Root className='mt-4' color='red'>
          <Callout.Icon>
            <MdError />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-4 mt-6 ' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <TextField.Root
              placeholder='Title'
              value={field.value ?? ''}
              onChange={(e) =>
                field.onChange((e.target as HTMLInputElement).value)
              }
              onBlur={field.onBlur}
            />
          )}
        />

        <Controller
          name='description'
          control={control}
          render={({ field }) => <SimpleMDE {...field} />}
        />
        <Button>Create</Button>
      </form>
    </div>
  );
};

export default CreateIssuePage;
