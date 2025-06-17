import { ClipLoader } from 'react-spinners';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  loading?: boolean;
}

export default function LoadingSpinner({
  size = 50,
  color = '#4F46E5',
  loading = true,
}: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <ClipLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
      />
    </div>
  );
} 