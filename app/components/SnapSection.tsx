export function SnapSection({
  children,
  align = 'center',
}: {
  children: React.ReactNode;
  align?: 'center' | 'start';
}) {
  const justify = align === 'start' ? '[&>*]:justify-start' : '[&>*]:justify-center';
  return (
    <div className={`min-h-screen snap-start [&>*]:min-h-screen [&>*]:flex [&>*]:flex-col ${justify}`}>
      {children}
    </div>
  );
}
