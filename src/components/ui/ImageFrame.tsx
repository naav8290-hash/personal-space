import type { ReactNode } from 'react'
import { imageMeta } from '../../lib/images'
import Reveal from './Reveal'

type ImageFrameProps = {
  src: string
  alt: string
  ratio?: string
  className?: string
  mediaClassName?: string
  caption?: ReactNode
  hover?: boolean
  eager?: boolean
  priority?: boolean
  sizes?: string
  imgPosition?: string
  reveal?: boolean
}

export default function ImageFrame({
  src,
  alt,
  ratio,
  className = '',
  mediaClassName = '',
  caption,
  hover = false,
  eager = false,
  priority = false,
  sizes = '(max-width: 700px) 100vw, 50vw',
  imgPosition = 'center',
  reveal = true,
}: ImageFrameProps) {
  const meta = imageMeta(src)

  return (
    <figure className={`frame${hover ? ' frame--hover' : ''}${className ? ` ${className}` : ''}`}>
      <Reveal
        variant={reveal ? 'image' : 'fade'}
        className={`frame__media${mediaClassName ? ` ${mediaClassName}` : ''}`}
        style={{
          aspectRatio: ratio ?? `${meta.width} / ${meta.height}`,
          backgroundImage: meta.lqip ? `url("${meta.lqip}")` : undefined,
        }}
      >
        <img
          src={src}
          alt={alt}
          width={meta.width}
          height={meta.height}
          sizes={sizes}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          style={{ objectPosition: imgPosition }}
        />
      </Reveal>
      {caption ? <figcaption className="frame__cap">{caption}</figcaption> : null}
    </figure>
  )
}
