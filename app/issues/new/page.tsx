'use client';

import { createIssueSchema } from '@/app/validation-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Callout, Heading, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';
import { ErrorMessage, Spinner } from '@/app/components';

type FormData = z.infer<typeof createIssueSchema>;

const CreateIssuePage = () => {
  const { handleSubmit, control, formState } = useForm<FormData>({
    resolver: zodResolver(createIssueSchema),
  });

  const router = useRouter();
  const [error, setError] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmiting(true);
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
      setIsSubmiting(false);
      console.error(err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className='max-w-xl'>
      <Heading>Create new issue</Heading>
      {error && (
        <Callout.Root className='mt-4' color='red'>
          <Callout.Icon>
            <MdError />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-6 mt-6' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='title'
          control={control}
          render={({ field }) => (
            <div>
              <TextField.Root
                placeholder='Title'
                value={field.value ?? ''}
                onChange={(e) =>
                  field.onChange((e.target as HTMLInputElement).value)
                }
                onBlur={field.onBlur}
              />
              <ErrorMessage>{formState.errors.title?.message}</ErrorMessage>
            </div>
          )}
        />

        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <div>
              <SimpleMDE {...field} />
              <ErrorMessage>
                {formState.errors.description?.message}
              </ErrorMessage>
            </div>
          )}
        />
        <Button disabled={isSubmiting}>
          Create new issue {isSubmiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default CreateIssuePage;
