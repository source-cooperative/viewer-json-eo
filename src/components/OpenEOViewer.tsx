import React from 'react'

interface OpenEOViewerProps {
  url: string
}

export const OpenEOViewer: React.FC<OpenEOViewerProps> = ({ url }) => (
  <div
    style={{ height: '100%' }}
    dangerouslySetInnerHTML={{
      __html: `<openeo-stac url="${encodeURI(url)}" style="display:block;height:100%"></openeo-stac>`,
    }}
  />
)
