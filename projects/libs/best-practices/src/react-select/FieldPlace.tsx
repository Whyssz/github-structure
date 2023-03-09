export const FieldPlace: FC = () => {
	return (
		<>
			<Field
				{...register('name', {
					required: 'Name is required!',
				})}
				placeholder='Name'
				error={errors.name}
			/>
			<SlugField
				register={register}
				generate={() => setValue('slug', generateSlug(getValues('name')))}
				error={errors.slug}
			/>
			<Controller
				control={control}
				name='photo'
				defaultValue=''
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<UploadField
						onChange={onChange}
						value={value}
						error={error}
						folder='actors'
						placeholder='Photo'
					/>
				)}
				rules={{
					required: 'Photo is required',
				}}
			/>
		</>
	);
};

/* Another one
	<Controller
    control={control}
    name="isAdmin"
    render={({ field }) => (
      <Switch
        onToggle={field.value}
        onToggled={() => field.onChange(!field.value)}
      />
    )}
  />
*/
